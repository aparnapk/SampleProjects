package testrun;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)

@CucumberOptions(
		 features = "C:\\Users\\apappinisserikoranku\\Desktop\\Planit Docs\\eclipseworkspace2\\testone\\Feature\\google.feature",
		 glue= {"teststep"},
		 format= {"pretty","html:testone\\src\\test\\java\\testone\\testone-report"},
		 monochrome=true,	
		 dryRun=false
		 )
public class TestRunner {

}
