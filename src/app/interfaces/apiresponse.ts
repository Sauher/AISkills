export interface ApiResponse {
    status: number;
    conversation_id?: string;
    message?: string;
    data?: any;
    response: string;
  }