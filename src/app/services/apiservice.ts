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

  async startChat():Promise<ApiResponse>{
    try{
        const res = await axios.post(`${this.SERVER}/conversation`, {});
        console.log(res.data);
        return res.data;
    }catch(err){
    console.error(err);
    return {
        status: 500,
        message: 'Error sending mail'
    }
    }
}
}