const fs = require('fs');
const { v4: uuid } = require('uuid');

const allowedImgExtensions = ["png", "jpeg"];
const allowedPDFExtension = ["pdf"];

const saveFile = ({ mimetype, path, size }, allowedExtensions, destFolder = './app/public/images') => {
    // file ---> info de multer {mime,extension, name, etc}
    // para trabajar con multer hace falta solo mimetype, path, size
    //destFolder puede ser tambien la url de un bucket de s3
    // esta linea separa el mimetype por la barra
    try {
        const [type, extension] = mimetype.split("/")
        if (!allowedImgExtensions.includes(extension)) throw "Formato no permitido";
        const uid = uuid();
        const fileNameOut = `${destFolder}/${uid}.${extension}`;
        //Stream --procesar todo el string de bytes y transformarlo a imagen
        fs.createReadStream(path).pipe(fs.createWriteStream(fileNameOut));
        //Una vez creada la imagen, borrar archivo temporal
        fs.unlink(path, (err) => {
            if (err) throw "No se pudo borrar el archivo temporal ", e;
        });
        //Devuelvo el id de la imagen para insertarlo en tabla y tenerlo como referencia
        return uid;
    } catch (error) {
        throw error;
    }

};

const saveImg = (file) => {
    //comprobar size & mime
    console.log("File en saveImg File handler ", file)

    return saveFile(file, allowedImgExtensions);
};
const savePDF = () => {
    return saveFile(file, allowedPDFExtension);

};

module.exports = { saveImg, savePDF }