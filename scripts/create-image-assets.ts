import fs from "fs";
import path from "path";
import mkdirp from "mkdirp";

import { renderImageSets } from "./lib/render-image-sets";

import imageSets from "./metadata/images";
import imageSizes from "./metadata/sizes";

async function main() {
  for (const [folder, sets] of Object.entries(imageSets)) {
    const files = getImages(path.resolve(__dirname, "../assets", folder));
    const operations = [];
    for (const set of sets) {
      for (const file of files) {
        const fileFolder = file
          .split("/")
          .slice(0, -1)
          .join("/");
        const outpath = path.resolve(
          __dirname,
          "../public",
          folder,
          fileFolder
        );
        mkdirp.sync(outpath);

        const fileParts = file.split("/");
        const key = fileParts[fileParts.length - 1].replace(
          /(\.jpe?g|\.png)$/,
          ""
        );
        operations.push(
          renderImageSets({
            key,
            outpath,
            size: set,
            options: imageSizes[set],
            path: path.resolve(__dirname, "../assets", folder, file)
          })
        );
      }
    }
    await Promise.all(operations);
  }
}

function getImages(basePath: string) {
  const images = [];
  function getImagesInternal(dirPath: string) {
    const dir = fs.readdirSync(path.resolve(basePath, dirPath));
    for (const entry of dir) {
      const stats = fs.lstatSync(path.resolve(basePath, dirPath, entry));
      const key = [dirPath, entry].join("/");
      if (stats.isDirectory()) {
        getImagesInternal(key);
      } else {
        images.push(key.slice(3));
      }
    }
  }

  getImagesInternal("./");

  return images;
}

main();
