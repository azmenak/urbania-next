import sharp from "sharp";

interface RenderOptions {
  width?: number;
  height?: number;
  blur?: number;
}

interface RenderImageSetOptions {
  /**
   * Key of the file
   */
  key: string;
  /**
   * Readable label for the size
   */
  size: string;
  /**
   * Render options
   */
  options: RenderOptions;
  /**
   * Path to the file
   */
  path: string;
  /**
   * Optional outpath, will place in "processed" folder by default
   */
  outpath?: string;
}

export async function renderImageSets({
  key,
  size,
  options,
  path,
  outpath
}: RenderImageSetOptions) {
  if (outpath != null) {
    // ensure ends with '/'
    if (outpath.slice(-1) !== "/") {
      outpath += "/";
    }
  } else {
    outpath =
      path
        .split("/")
        .slice(0, -1)
        .concat("export")
        .join("/") + "/";
  }

  const image = sharp(path);
  const metadata = await image.metadata();

  const smallImage = image.clone();
  const largeImage = image;

  if (options.blur) {
    smallImage.blur(options.blur);
    largeImage.blur(options.blur);
  }

  smallImage.resize({
    width: options.width,
    height: options.height,
    fit: "inside"
  });
  largeImage.resize({
    width: options.width ? options.width * 2 : undefined,
    height: options.height ? options.height * 2 : undefined,
    fit: "inside"
  });

  const operations = [];
  if (metadata.format === "png") {
    operations.push(smallImage.png().toFile(`${outpath}${key}-${size}.png`));
    operations.push(largeImage.png().toFile(`${outpath}${key}-${size}@2x.png`));
  } else {
    operations.push(
      smallImage.jpeg({ quality: 50 }).toFile(`${outpath}${key}-${size}.jpg`)
    );
    operations.push(
      largeImage.jpeg({ quality: 50 }).toFile(`${outpath}${key}-${size}@2x.jpg`)
    );
  }

  try {
    await Promise.all(operations);
  } catch (error) {
    console.log(error);
  }
}
