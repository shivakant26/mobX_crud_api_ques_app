import { action, makeAutoObservable, observable } from "mobx";
import instanse, { instansePaper } from "../services/ApiConfig";

class AuthStore {
  apidata = [];
  getPaper = [];
  loginData = {
    message:"",
  }
  adminData = {
    message:"",
  }
  
  constructor() {
    makeAutoObservable(this, {
      apidata: observable,
      fetchData: action,
    });
  }

  async fetchData() {
    try {
      const response = await instanse.get('/users');
      this.apidata = response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async fetchAllPaper() {
    try {
      const response = await instansePaper.get('/paper');
      this.getPaper = response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async userLogin(data) {
    try {
      const response = await instansePaper.post('/users',data);
      if (response.data.id > 0) {
        this.loginData = {
          message :"Login user succussfully",
        }
        localStorage.setItem("token","flkill4lkjsi")
      } else {
        this.loginData = {
          message :"",
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async adminLogin(data) {
    try {
      const response = await instansePaper.post('/admin',data);
      if (response.data.id > 0) {
        this.adminData = {
          message :"Login admin succussfully",
        }
        localStorage.setItem("adminToken","123654")
      } else {
        this.adminData = {
          message :"",
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

}





const authStore = new AuthStore();
export default authStore;
