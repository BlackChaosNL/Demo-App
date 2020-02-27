import React from 'react';
import { ResponsiveAreaBump } from '@nivo/bump';

interface IData {
    id: string;
    data: Array<{
        x: any,
        y: any
    }>
};

export default class GraphView extends React.Component<{
	data: any
}> {
    // Remove "year-" from the label, not required.
    prepDate(date: string): string {
        return date.substring(5, date.length);
    }

    parseData(): Array<IData>{
      // Sort data to coherently display in the Graph.
      // eslint-disable-next-line
      this.props.data.sort((a: any, b: any) => {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);
        let same = dateA.getTime() === dateB.getTime();
        // Date is eql, ignore sorting to stablize sorting.
        if (same) return 0;
        // Date A is greater than Date B.
        if (dateA > dateB) return 1;
        // Date A is lesser than Date B.
        if (dateA < dateB) return -1;
      });
      
      // Object needing to be returned: 
      // { id: "missed_chat_count", data: [{x: int (DATE), y: int (Count)}] }
      // { id: "conversation_count", data: [{x: int (DATE), y: int (Count)}] }
      // { id: "visitors_with_conversation_count", data: [{x: int (DATE), y: int (Count)}] }
      const array: Array<IData> = new Array<IData>();
      array.push({ id: "missed_chat_count", data: [] });
      array.push({ id: "conversation_count", data: [] });
      array.push({ id: "visitors_with_conversation_count", data: [] });
      this.props.data.forEach((_item: any) => {
        array[0].data.push({ x: this.prepDate(_item.date), y: _item.missed_chat_count });
        array[1].data.push({ x: this.prepDate(_item.date), y: _item.conversation_count });
        array[2].data.push({ x: this.prepDate(_item.date), y: _item.visitors_with_conversation_count });
      });
      return array;
    }


	render () {
		return (
        <div className="GraphView">
            <ResponsiveAreaBump
                data={this.parseData()}
                margin={{ top: 40, right: 60, bottom: 40, left: 60 }}
                spacing={4}
                colors={{ scheme: 'nivo' }}
                blendMode="multiply"
                endLabel={false}
                axisTop={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '',
                    legendPosition: 'middle',
                    legendOffset: -36
                }}
                axisBottom={null}
            />
        </div>
        )
	}
}
