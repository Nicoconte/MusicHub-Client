import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user/components/user-form/user-form.component';
import { UserSigninComponent } from './user/pages/user-signin/user-signin.component';
import { UserSignupComponent } from './user/pages/user-signup/user-signup.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { LobbyComponent } from './room/pages/lobby/lobby.component';
import { CreateRoomFormComponent } from './room/components/create-room-form/create-room-form.component';
import { RoomModalComponent } from './room/components/room-modal/room-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserSigninComponent,
    UserSignupComponent,
    NotFoundComponent,
    LobbyComponent,
    CreateRoomFormComponent,
    RoomModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
