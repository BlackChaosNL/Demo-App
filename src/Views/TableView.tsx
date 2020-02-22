import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

export default class Table extends React.Component<{
	columns: any,
	data: any
}> {
	render () {
		return (<div >
				<BootstrapTable
				  bootstrap4
				  keyField='id'
				  columns={ this.props.columns }
				  data={ this.props.data } />
			</div>)
	}
}
