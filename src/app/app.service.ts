import {Injectable} from '@angular/core';

@Injectable()
export class AppService{

    getStocks():string[]{
        return ['AAPL', 'IBM', 'GOOG'];
    }
}
