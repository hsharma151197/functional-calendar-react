import React, {Component} from 'react';
import './Dates.css';
// import moment from 'moment';

class Dates extends Component{

    // makeCells(row, col){
    //     return <td className={`column-${row} row-${col}`}></td>;       
    // }

    // returnDate(cur){
    //     if(cur === '2019/06/#'){
    //         return '#';
    //     }
    //     else
    //         return moment(new Date(cur)).format('dddd');
    // }

    // returnElement(){
    //     if(this.returnDate(`2019/06/1`) === 'Sunday'){
    //         return this.makeCells(1, 1);
    //     }else if(this.returnDate(`2019/06/1`) === 'Tueday'){
    //         return this.makeCells(1, 2);
    //     }else if(this.returnDate(`2019/06/1`) === 'Wednesday'){
    //         return this.makeCells(1, 3);
    //     }else if(this.returnDate(`2019/06/1`) === 'Thursday'){
    //         return this.makeCells(1, 4);
    //     }else if(this.returnDate(`2019/06/1`) === 'Friday'){
    //         return this.makeCells(1, 5);
    //     }else if(this.returnDate(`2019/06/1`) === 'Saturday'){
    //         return this.makeCells(1, 6);
    //     }
    // }

    render(){
        return(
            <tr className="Dates">
                {this.props.datesArr.map((current) => <td><p>{current}</p><h4>{this.props.day}</h4></td>)}

            </tr>
        );
    }
}
// {this.returnDate(`2019/06/${current}`)}

export default Dates;