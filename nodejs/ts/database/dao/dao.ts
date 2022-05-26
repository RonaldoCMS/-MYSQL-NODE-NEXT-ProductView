export default abstract class Dao<E> {
   abstract insert(e: E): Promise<boolean>;
   abstract update(e: E): Promise<boolean>;
   abstract delete(id: number): Promise<boolean>;
   abstract select(): Promise<E[]>;
   abstract selectById(id: number): Promise<E[]>;
}
