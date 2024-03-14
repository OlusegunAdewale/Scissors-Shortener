import {
    Auth,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    OAuthProvider,
  } from "firebase/auth";
  
  export default class FirebaseAuth {
    static #instance: FirebaseAuth;
    private auth: Auth;
  
    static get instance() {
      if (!FirebaseAuth.#instance) FirebaseAuth.#instance = new FirebaseAuth();
  
      return FirebaseAuth.#instance;
    }
  
    constructor() {
      this.auth = getAuth();
    }
  
    createUserWithEmailAndPassword(email: string, password: string) {
      return createUserWithEmailAndPassword(this.auth, email, password);
    }
  
    signInWithEmailAndPassword(email: string, password: string) {
      return signInWithEmailAndPassword(this.auth, email, password);
    }
  
    async signInWithGoogle() {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);
  
      return GoogleAuthProvider.credentialFromResult(result);
    }
    async signInWithAppple() {
      const provider = new OAuthProvider("apple.com");
      provider.addScope("email");
      provider.addScope("name");
      
      const result = await signInWithPopup(this.auth, provider);
  
      return GoogleAuthProvider.credentialFromResult(result);
    }
  
    logout() {
      return signOut(this.auth);
    }
  }
  