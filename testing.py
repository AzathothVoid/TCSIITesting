from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Headless Chrome setup
options = Options()
options.add_argument("--headless")
options.add_argument("--disable-gpu")
service = Service("C:\chromedriver-win64\chromedriver.exe")
driver = webdriver.Chrome(service=service, options=options)
import time

# Explicit wait
wait = WebDriverWait(driver, 10)

# Test URL
driver.get("http://localhost:3000/")  # Replace with your app's URL
time.sleep(3)  # Wait for the page to load
try:
    def test_home_page_title():
        assert "DEFENDO" in driver.title
        print("Test Passed: Home Page Title")

    def test_page_redirection():
        driver.find_element(By.ID, "account-login").click()
        time.sleep(1)
        assert "/account/login" in driver.current_url
        print("Test Passed: Page Redirection")

    def test_register():
        driver.get("http://localhost:3000/account/signup")
        driver.find_element(By.NAME, "firstName").send_keys("Muhammad")
        driver.find_element(By.NAME, "lastName").send_keys("Nauman")
        driver.find_element(By.NAME, "email").send_keys("naumanzahid63@gmail.com")
        driver.find_element(By.NAME, "password").send_keys("123456")
        driver.find_element(By.NAME, "confirmPassword").send_keys("123456")
        driver.find_element(By.CLASS_NAME, "signup-btn").click()
        time.sleep(1)
        assert "/account/login" in driver.current_url

    def test_login():
        driver.get("http://localhost:3000/account/login")
        driver.find_element(By.NAME, "email").send_keys("naumanzahid63@gmail.com")
        driver.find_element(By.NAME, "password").send_keys("123456")
        driver.find_element(By.CLASS_NAME, "login-btn").click()
        time.sleep(1)    
        assert "http://localhost:3000/" == driver.current_url
        
    def test_invalid_login():
        driver.get("http://localhost:3000/account/login")
        driver.find_element(By.NAME, "email").send_keys("wrong@example.com")
        driver.find_element(By.NAME, "password").send_keys("wrongpass")
        driver.find_element(By.NAME, "loginButton").click()
        error = driver.find_element(By.CLASS_NAME, "error-message")
        time.sleep(1)
        assert error.is_displayed()

        
    def test_responsive_design():
        driver.set_window_size(375, 812)        
        mobile_menu = driver.find_element(By.ID, "carousel-img-mb")
        time.sleep(1)
        assert mobile_menu.is_displayed()
        
    def test_search_functionality():
        driver.get("http://localhost:3000")
        driver.find_element(By.ID, "searchBar").send_keys("Healthy Recipes")
        driver.find_element(By.ID, "searchButton").click()
        time.sleep(1)
        assert "Healthy Recipes" in driver.page_source

    def test_add_todo():
        driver.get("http://localhost:3000/dashboard")
        driver.find_element(By.ID, "newTodo").send_keys("Buy groceries")
        driver.find_element(By.ID, "addTodoButton").click()
        time.sleep(1)
        assert "Buy groceries" in driver.page_source

        
    def test_form_validation():
        driver.get("http://localhost:3000/contact")
        submitButton = driver.find_element(By.ID, "submitButton")    
        time.sleep(1)
        assert submitButton.is_displayed


    def test_logout():
        driver.get("http://localhost:3000/")
        driver.find_element(By.ID, "logout-btn").click()
        time.sleep(1)
        assert "http://localhost:3000/" == driver.current_url
        
    test_home_page_title()
    test_page_redirection()
    test_register()
    test_login()
    test_responsive_design()
    test_logout()
    test_add_todo()
    test_search_functionality()
    test_form_validation()
    test_invalid_login()
    
except AssertionError as e:
    print(f"Test Failed")


driver.quit()