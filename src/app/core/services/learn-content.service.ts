import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, doc, collectionGroup, query, orderBy } from '@angular/fire/firestore';
import { Observable, combineLatest, map, switchAll } from 'rxjs';

export interface Topic {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  image: string;
  order: number;
}

export interface UnitWithTopics {
  id: string;
  title: string;
  order: number;
  expanded?: boolean;
  topics: Topic[];
}

@Injectable({ providedIn: 'root' })
export class LearnContentService {
  constructor(private firestore: Firestore) {}

  getUnitsWithTopics(): Observable<UnitWithTopics[]> {
    const unitsRef = collection(this.firestore, 'units');
    const unitsQuery = query(unitsRef, orderBy('order'));
    return collectionData(unitsQuery, { idField: 'id' }).pipe(
      map((units: any[]) => units.map(unit => ({ ...unit, topics: [], expanded: false }))),
      map((units: UnitWithTopics[]) => {
        const topicsObservables = units.map(unit => {
          const topicsRef = collection(this.firestore, `units/${unit.id}/topics`);
          const topicsQuery = query(topicsRef, orderBy('order'));
          return collectionData(topicsQuery, { idField: 'id' }).pipe(
            map((topics: any[]) => topics as Topic[])
          );
        });
        return combineLatest(topicsObservables).pipe(
          map(topicsArr =>
            units.map((unit, i) => ({ ...unit, topics: topicsArr[i] || [] }))
          )
        );
      }),
      // Flatten the nested observable
      switchAll()
    );
  }
}
