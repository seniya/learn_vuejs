import http from '../http-common';

class TurorialDataService {
  public getAll() {
    http.interceptors;
    return http.get('/posts');
  }
  public get(id: string) {
    return http.get(`/posts/${id}`);
  }
  public create(data: any) {
    return http.post('/posts', data);
  }
  public update(id: string, data: any) {
    return http.put(`/posts/${id}`, data);
  }
  public delete(id: string) {
    return http.delete(`/posts/${id}`);
  }
  public deleteAll() {
    return http.delete(`/posts`);
  }
  public findByTitle(title: string) {
    return http.get(`/posts?title=${title}`);
  }
}

export default new TurorialDataService();
