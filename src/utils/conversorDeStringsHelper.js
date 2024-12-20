// Objetivo: converter propriedades de um objeto que contenham a palavra "id" para o tipo Number

module.exports = (objetoParams) => {
  for (let propriedade in objetoParams) {
    if (/Id|id/.test(propriedade)) {
      objetoParams[propriedade] = Number(objetoParams[propriedade]);
    }
  }
  return objetoParams;
};

  