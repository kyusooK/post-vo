package untitled.common;

import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import untitled.SocialApplication;

@CucumberContextConfiguration
@SpringBootTest(classes = { SocialApplication.class })
public class CucumberSpingConfiguration {}
