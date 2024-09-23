/**
 * TODOのデータを表現するクラス
 * @param id ID
 * @param title タイトル
 * @param discription 詳細
 * @param completed 完了フラグ　false:未完了 true:完了
 */
export class TodoDto {
    id: number;
    title: string;
    discription?: string;
    completed: boolean;

    constructor(id: number, title: string,discription:string, completed: boolean) {
        this.id = id;
        this.title = title;
        this.discription = discription
        this.completed = completed;
    }
}