import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../enviroment/enviroment';
import { ApiResponse } from '../interfaces/apiresponse';

@Injectable({
  providedIn: 'root'
})

export class APIService {

  SERVER = environment.apiUrl;

  constructor() { }

    async login(username: string, password: string): Promise<ApiResponse> {
        try {
            const response = await axios.post(`${this.SERVER}/login`, { username, password },{
                headers: {
                  'Content-Type': 'application/json',
                },
                withCredentials: true
              });
            return response.data as ApiResponse;
        } catch (error: any) {
            if (error.response) {
                return error.response.data as ApiResponse;
            } else {
                return { status: 500, message: 'Server error' };
            }
        }
    }
    async tokenauth(token: string): Promise<ApiResponse> {
      try {
          const response = await axios.get(`${this.SERVER}/auth`, {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
              withCredentials: true
            });
          return response.data as ApiResponse;
      } catch (error: any) {
            if (error.response) {
                return error.response.data as ApiResponse;
            } else {
                return { status: 500, message: 'Server error' };
            }
        }
    }
}
