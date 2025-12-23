import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GatewayService {
  // الميكروسيرفس القديم شغال على 3001
  private readonly baseUrl = 'http://localhost:3001';

  constructor(private readonly http: HttpService) {}

  // ---------- AUTH ----------
  async forwardToAuth(endpoint: string, body: any) {
    const url = `${this.baseUrl}/auth/${endpoint}`;
    const { data } = await firstValueFrom(this.http.post(url, body));
    return data;
  }

  // ---------- MOVIES ----------
  async forwardToMovies(
    endpoint: string,
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
    body?: any,
    authHeader?: string,
  ) {
    const url = `${this.baseUrl}/${endpoint}`;
    const headers = authHeader ? { Authorization: authHeader } : {};

    switch (method) {
      case 'POST': {
        const { data } = await firstValueFrom(
          this.http.post(url, body, { headers }),
        );
        return data;
      }
      case 'GET': {
        const { data } = await firstValueFrom(
          this.http.get(url, { headers }),
        );
        return data;
      }
      case 'PATCH': {
        const { data } = await firstValueFrom(
          this.http.patch(url, body, { headers }),
        );
        return data;
      }
      case 'DELETE': {
        const { data } = await firstValueFrom(
          this.http.delete(url, { headers }),
        );
        return data;
      }
    }
  }
}
