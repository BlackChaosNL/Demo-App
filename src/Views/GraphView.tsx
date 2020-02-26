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
    parseData(): Array<IData>{
      // Object needing to be returned: 
      // { id: "missed_chat_count", data: [{x: int (DATE), y: int (Count)}] }
      // { id: "conversation_count", data: [{x: int (DATE), y: int (Count)}] }
      // { id: "visitors_with_conversation_count", data: [{x: int (DATE), y: int (Count)}] }
      const array: Array<IData> = new Array<IData>();
      array.push({ id: "missed_chat_count", data: [] });
      array.push({ id: "conversation_count", data: [] });
      array.push({ id: "visitors_with_conversation_count", data: [] });
      this.props.data.forEach((_item: any) => {
        array[0].data.push({ x: _item.date, y: _item.missed_chat_count });
        array[1].data.push({ x: _item.date, y: _item.conversation_count });
        array[2].data.push({ x: _item.date, y: _item.visitors_with_conversation_count });
      });
      return array;
    }


	render () {
		return (
        <div className="GraphView">
            <ResponsiveAreaBump
                data={this.parseData()}
                margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
                spacing={4}
                colors={{ scheme: 'nivo' }}
                blendMode="multiply"
                startLabel="id"
                axisTop={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '',
                    legendPosition: 'middle',
                    legendOffset: -36
                }}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
            />
        </div>
        )
	}
}
