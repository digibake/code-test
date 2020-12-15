import chalk from 'chalk'

//-----------------------------------------------------------------
/**
 * Main test function for code tool
 */
export async function main() {

  console.log("hello")

}

//-----------------------------------------------------------------
// MAIN FUNCTION
//-----------------------------------------------------------------
main().catch((e: Error) => {
  console.error(`${chalk.redBright('✘')} ${chalk.red(e.message)}`);
});