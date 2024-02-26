import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowMovies from './ContentRowMovies';
import Chart from './Chart';

function ContentRowTop() {
	return (
		<React.Fragment>
			{/*<!-- Content Row Top -->*/}
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">Panel de control</h1>
					<a href="http://localhost:3000/inventory/create" class="admin-features">Añadir nuevo producto</a>
					<a href="http://localhost:3000/inventory" class="admin-features">Editar o eliminar productos</a>
					<a href="http://localhost:3000" class="admin-features">Volver a la web</a>

				</div>

				{/*<!-- Content Row Movies-->*/}
				<ContentRowMovies />
				<ContentRowCenter />
				<Chart />

			</div>
			{/*<!--End Content Row Top-->*/}

		</React.Fragment>
	)

}
export default ContentRowTop;