import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

export default class Table extends React.Component<{
	columns: any,
	data: any
}> {
	render () {
		return (<div className="fullSize">
		<br />
				<BootstrapTable
				  bootstrap4
				  keyField='date'
				  columns={ this.props.columns }
				  data={ this.props.data }
				  pagination={ paginationFactory({
								  pageStartIndex: 0,
								  showTotal: true,
								  sizePerPageList: [5]
								}) }
				  />
			</div>)
	}
}
