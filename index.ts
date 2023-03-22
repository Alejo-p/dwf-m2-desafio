import * as minimist from "minimist";
import { PelisController } from "./controllers";
function parseaParams(argv) {
  const resultado = minimist(argv);

  return resultado;
}

function main() {
  const pelisController = new PelisController;
  const params = parseaParams(process.argv.slice(2));

  console.log(params);
}

main();
