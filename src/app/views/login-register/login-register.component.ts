import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  regOtp: any;
  regPhone: any;
  regPassword: any;

  registrationUnsuccessful : any;
  registrationSuccessful : any;
  otpRequired = false;
  disableRegister = false;
  disableOTP = false;

  constructor(private http:HttpClient,private router: Router) { 
    this.otpRequired = false;
    this.disableRegister = false;
    this.disableOTP = false;
  }

  ngOnInit(): void {
    this.otpRequired = false;
  }

  login(phoneno:any,password:any)
  {
    var loginDetails = {
      "phoneNo":phoneno,
      "password":password
    }

    this.http.post<any>('http://139.84.142.47:8080/users/login', loginDetails ).subscribe(data => {
      if(data.code == 200)
      {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("sessionId", data.sessionId);
        localStorage.setItem("refreshToken", data.refreshToken);
        this.router.navigate(['/shop']);
      }
      else if(data.code == 502)
      {
        this.regPhone = phoneno;
        this.regPassword = password;
        this.otpRequired = true;
      }
      else{
        console.log(data);
        this.registrationUnsuccessful = "Something went wrong";
        this.registrationSuccessful = "";
        this.otpRequired = false;
        this.disableRegister = false;
        this.disableOTP = false;              
      }
  });
    alert(phoneno);
    alert(password);
  }
  loginUsingOtp(phoneno:any,password:any,otp:any)
  {
    console.log();
    console.log();
    console.log(phoneno);
    console.log(password);
    console.log(otp);
    console.log(this.regPhone);
    console.log(this.regPassword);
    console.log();
    console.log();
    
    if(phoneno == "" )
    {
      phoneno = this.regPhone;
    }
    if(password == "" )
    {
      password = this.regPassword;
    }

    this.disableRegister = true;
    this.disableOTP = true;

    var loginDetails = {
      "phoneNo":phoneno,
      "password":password
    }
  
    var otpParameter = {
      "phoneNo":phoneno,
      "otp":otp
    }
    this.http.post<any>('http://139.84.142.47:8080/user/verify/otp', otpParameter ).subscribe(data => {
      if(data.code == "200")
      {
        this.registrationUnsuccessful = "";
        this.registrationSuccessful = "Registration Successful";
        this.otpRequired = true;
        this.http.post<any>('http://139.84.142.47:8080/users/login', loginDetails ).subscribe(data => {
          if(data.code == 200)
          {
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("sessionId", data.sessionId);
            localStorage.setItem("refreshToken", data.refreshToken);
            this.router.navigate(['/shop']);
          }
          else{
            this.registrationUnsuccessful = "Something went wrong";
            this.registrationSuccessful = "";
            this.otpRequired = false;
            this.disableRegister = false;
            this.disableOTP = false;              
          }
      });
      }
      else{
        this.registrationUnsuccessful = "Invalid OTP provided";
        this.registrationSuccessful = "";
        this.otpRequired = true;
      }

      this.disableRegister = false;
      this.disableOTP = false;
  
    });

  }



  verifyOtp(phoneno:any , otp:any, password:any,)
  {
    this.disableRegister = true;
    this.disableOTP = true;

    var loginDetails = {
      "phoneNo":phoneno,
      "password":password
    }
  
    var otpParameter = {
      "phoneNo":phoneno,
      "otp":otp
    }
    this.http.post<any>('http://139.84.142.47:8080/user/verify/otp', otpParameter ).subscribe(data => {
      if(data.code == "200")
      {
        this.registrationUnsuccessful = "";
        this.registrationSuccessful = "Registration Successful";
        this.otpRequired = true;
        this.http.post<any>('http://139.84.142.47:8080/users/login', loginDetails ).subscribe(data => {
          if(data.code == 200)
          {
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("sessionId", data.sessionId);
            localStorage.setItem("refreshToken", data.refreshToken);
            this.router.navigate(['/shop']);
          }
          else{
            this.registrationUnsuccessful = "Something went wrong";
            this.registrationSuccessful = "";
            this.otpRequired = false;
            this.disableRegister = false;
            this.disableOTP = false;              
          }
      });
      }
      else{
        this.registrationUnsuccessful = "Invalid OTP provided";
        this.registrationSuccessful = "";
        this.otpRequired = true;
      }

      this.disableRegister = false;
      this.disableOTP = false;
  
    });
  }

  register(name:any,phoneno:any,password:any)
  {
    this.regPhone = phoneno;
    console.log(this.regPhone);
    this.regPassword = password;
  
    this.disableRegister = true;
    this.disableOTP = true;

    var registrationParameter = {
      "name":name,
      "phoneNo":phoneno,
      "password":password
  }

    this.http.post<any>('http://139.84.142.47:8080/user/register', registrationParameter ).subscribe(data => {
      if(data.code == "500")
      {
        this.registrationUnsuccessful = "Something went wrong";
        this.registrationSuccessful = "";
        this.otpRequired = false;
      }
      if(data.code == "501")
      {
        this.registrationUnsuccessful = "User already registered";
        this.registrationSuccessful = "";
        this.otpRequired = false;
      }
      if(data.code == "502")
      {
        this.registrationUnsuccessful = "Please verify your account with OTP";
        this.registrationSuccessful = "";
        this.otpRequired = true;
      }
      if(data.code == "200")
      {
        this.registrationUnsuccessful = "";
        this.registrationSuccessful = "OTP has been sent to your device";
        this.otpRequired = true;

      }

      this.disableRegister = false;
      this.disableOTP = false;

    });
  }

}
