import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ErrorService } from '../errors/error.service';
import { GraphQLService } from '../graphql.service';
import { Observable } from 'rxjs';
import { SignUpMutation } from '../../graphql/mutations/auth/signUp.mutation';

interface SignUpInput {
  fullName: string;
  email: string;
  password: string;
  telephone: string;
  acceptTerms: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService extends GraphQLService {
  constructor(
    protected override apollo: Apollo,
    protected override errorService: ErrorService
  ) {
    super(apollo, errorService);
  }

  signUp(data: SignUpInput): Observable<any> {
    return this.mutate(
      SignUpMutation,
      {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
        passwordConfirmation: data.password, // Using password as passwordConfirmation since we've already validated they match
        telephone: data.telephone,
        acceptTerms: data.acceptTerms
      },
      'signUp'
    );
  }
} 