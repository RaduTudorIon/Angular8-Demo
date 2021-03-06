import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.formModel.reset();
          this.toastr.success('User added successfully!', 'Yeeeeees');
        } 
        else{
          this.toastr.error('User creation failed', 'Noooooo');

        }/*else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                break;

              default:
                break;
            }
          });
        }*/
      },
      err => {
        console.log(err);
      }
    );
  }

}
