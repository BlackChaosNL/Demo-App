import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
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
				  keyField='id'
				  columns={ this.props.columns }
				  data={ this.props.data }
				  pagination={ paginationFactory({
								  paginationSize: 4,
								  pageStartIndex: 0,
								  showTotal: true,
								  sizePerPageList: [5]
								}) }
				  />
			</div>)
	}
}
