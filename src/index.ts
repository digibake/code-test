import chalk from 'chalk'

function output(){
  console.log("hello");
}

//-----------------------------------------------------------------
/**
 * Main test function for code tool
 */
export async function main() {

  output();

}

//-----------------------------------------------------------------
// MAIN FUNCTION
//-----------------------------------------------------------------
main().catch((e: Error) => {
  console.error(`${chalk.redBright('✘')} ${chalk.red(e.message)}`);
});