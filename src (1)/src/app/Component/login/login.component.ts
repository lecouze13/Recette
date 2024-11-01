import { Component, Input } from '@angular/core';
import { MessageService } from '../../message.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  message!: string;
  ismessage: boolean;
  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    private router: Router
  ) {
    this.message = '';
    this.ismessage = false;
  }

  Login() {
    const username = (<HTMLInputElement>(
      document.getElementById('login_username')
    )).value;
    const password = (<HTMLInputElement>(
      document.getElementById('login_password')
    )).value;
    console.log(username);
    console.log(password);

    this.ismessage = false;

    const url =
      'https://lorenzo-geano-etu.pedaweb.univ-amu.fr/extranet/CuisineLOLO/login.php';

    const data = {
      user: username,
      password: password,
    };

    console.log(data);
    this.http.post(url, data).subscribe(
      (response) => {
        console.log(response);
        localStorage.setItem("TokenJWT", (response as any).token);


        // if(testResponse.Error)
        // {

        // }
        // location.reload()
      },
      (error) => {
        this.message = error.error.Error;
        console.log(error.error.Error);
        this.ismessage = true;
      }
    );
  }

  Register() {
    const username = (<HTMLInputElement>(
      document.getElementById('register_username')
    )).value;
    const password = (<HTMLInputElement>(
      document.getElementById('register_password')
    )).value;
    const password2 = (<HTMLInputElement>(
      document.getElementById('register_password2')
    )).value;
    console.log(username);
    console.log(password);
    console.log(password2);
    if (password != password2) {
      this.message = 'Vos passwords sont différents';
      this.ismessage = true;
    } else {
      this.ismessage = false;

      const url =
        'https://lorenzo-geano-etu.pedaweb.univ-amu.fr/extranet/CuisineLOLO/register.php';

      const data = {
        user: username,
        password: password,
      };

      console.log(data);
      this.http.post(url, data).subscribe(
        (response) => {
          alert(response);
          location.reload();
        },
        (error) => {
          this.message = error.error.Error;
          console.log(error.error.Error);
          this.ismessage = true;
        }
      );
    }
  }
}
