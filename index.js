'use strict';
// const fs = require('fs/promises');
// const fs2 = require('fs');
// fs2.promises;
var _ = require('lodash');

console.log(_.random(-1000,500))
/*
  resolve - этап поиcка модуля

    1 подключаются core modules
    2 - ищется фалй
      2.1 ищется фалй с расширением .js
      2.2 ищется фалй с расширением .json
    3 - ишем папку
      3.1 - package.json -> "main"
      3.2 index.js
      3.3 index.json
    4. - ищем папку node_modules
    5 - кидаем ошибку

  loading - чтение модуля / файла
  wrapping - вы весь файл оборачиваее в функцию, подсовываются 
    require, __dirname, и тд
  evaluation - запускается код в файле
  caching - результат 4 этапа сохраняется и потом отдается в export
*/
