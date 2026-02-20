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
                return { status: 500, message: 'Server error',response: '' };
            }
        }
    }
    async tokenauth(token: string,prompt:string): Promise<ApiResponse> {
        try {
          const res = await axios.post(`${this.SERVER}/api/chat/conversation`, { token , prompt}, {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true
          });
          return res.data as ApiResponse;
        } catch (error: any) {
          if (error.response) {
            return error.response.data as ApiResponse;
          } else {
            return { status: 500, message: 'Server error',response: '' };
          }
    }
  }
  async getMessage(conversationId: string): Promise<ApiResponse> {
    try {
      const res = await axios.get(`${this.SERVER}/api/chat/conversation/${conversationId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true
      });
      return res.data as ApiResponse;
    } catch (error: any) {
      if (error.response) {
        return error.response.data as ApiResponse;
      } else {
        return { status: 500, message: 'Server error',response: '' };
      }
    }
  }
  async putMessage(conversationId: string,prompt:string): Promise<ApiResponse> {
    try {
      const res = await axios.put(`${this.SERVER}/api/chat/conversation/${conversationId}`,{prompt}, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true
      });
      return res.data as ApiResponse;
    } catch (error: any) {
      if (error.response) {
        return error.response.data as ApiResponse;
      } else {
        return { status: 500, message: 'Server error',response: '' };
      }
    }
  }
}