package teststep;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class StepDef {
	public static WebDriver driver;

	@Given("^user opens chrome browser$")
	public void user_opens_chrome_browser() throws Throwable {

		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\apappinisserikoranku\\Desktop\\Planit Docs\\eclipseworkspace2\\testone\\src\\test\\java\\testone\\chromedriver.exe");
		driver = new ChromeDriver();
	}

	@Then("^user enters url$")
	public void user_enters_url() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.out.println("Enter url");
		driver.get("http://www.google.com");
	}

	@Given("^user serch for a text in search field$")
	public void user_serch_for_a_text_in_search_field() throws Throwable {
		driver.findElement(By.name("q")).sendKeys("Switzerland");
		System.out.println("Search for a text");
	}

	@Given("^user clicks on google search button$")
	public void user_clicks_on_google_search_button() throws Throwable {
		Thread.sleep(3000);
		List <WebElement>li = driver.findElements(By.xpath("//ul[@role='listbox']//li/descendant::div[@class='sbl1']"));

		System.out.println("Size" + li.size());
		for (int i = 0; i < li.size(); i++) {
			if (li.get(i).getText().contains("switzerland language")) {
				li.get(i).click();
				break;
			}
		}
	}

	@Then("^user gets the result$")
	public void user_gets_the_result() throws Throwable {
		System.out.println("Enter result");
		driver.close();
	}
	@Given("^user search whether logo is present$")
	public void user_search_whether_logo_is_present() throws Throwable {
	    
	   Boolean val = driver.findElement(By.id("hplogo")).isDisplayed();
	   if(val==true) {
	    	System.out.println("Image is displayed");
	    }
	}

	@Given("^returns true$")
	public void returns_true() throws Throwable {
	    System.out.println("Image verification done");
	    driver.close();
	}



}
