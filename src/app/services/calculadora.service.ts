import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  private storageKey: string = 'calculadoraHistorial';

  constructor() {
    this.loadHistory();
  }

  private historyList: string[] = [];

  private saveHistory(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.historyList));
  }

  private loadHistory(): void {
    const storedHistory = localStorage.getItem(this.storageKey);
    if (storedHistory) {
      this.historyList = JSON.parse(storedHistory);
    }
  }

  addOperation(operation: string): void {
    this.historyList.push(operation);
    this.saveHistory();
  }

  getHistory(): string[] {
    return this.historyList;
  }

  clearHistory(): void {
    this.historyList = [];
    this.saveHistory();
  }
}
