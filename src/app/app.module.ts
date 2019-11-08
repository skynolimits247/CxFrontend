import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MoviesModule } from './movies/movies.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './shared/components/about/about.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { CartComponent } from './cart/cart.component';
import { UserProfileModule } from './user-profile/user-profile.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    NotFoundComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    MoviesModule,
    AppRoutingModule,
    UserProfileModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule
  ],
  exports: [ReactiveFormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
