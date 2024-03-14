import {
    addDoc,
    getFirestore,
    type Firestore,
    collection,
    // getDocs,
    onSnapshot,
  } from "firebase/firestore";
  import { ShortenResponse } from "../api/models/shortener.model";
  
  export default class Database {
    private db: Firestore;
    static #instance: Database;
  
    static get instance() {
      if (!Database.#instance) Database.#instance = new Database();
  
      return Database.#instance;
    }
  
    constructor() {
      this.db = getFirestore();
    }
  
    saveLinkToHistories(uid: string, link: ShortenResponse) {
      return addDoc(collection(this.db, "users", uid, "histories"), link);
    }
  
    getHistories(uid: string, onData: (histories: ShortenResponse[]) => void) {
      return onSnapshot(
        collection(this.db, "users", uid, "histories"),
        (snapshots) => {
          onData(snapshots.docs.map((doc) => doc.data()) as ShortenResponse[]);
        }
      );
    }
  }
  