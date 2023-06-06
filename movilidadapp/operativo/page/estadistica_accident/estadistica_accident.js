frappe.pages['estadistica-accident'].on_page_load = function(wrapper) {
	new MyPage(wrapper);
}

//PAGE CONTENT
MyPage = Class.extend({
	init: function(wrapper){
		this.page = frappe.ui.make_app_page({
			parent: wrapper,
			title: 'Estadistica',
			single_column: true
		});
		//MAKE PAGE
		this.make();
	},

	//MakePage
	make:function(){
		//grab Class
		let me = $(this);

		//body content
		// let body = `<h1> Hola Mundo</h1>`;

		//push dom element
		$(frappe.render_template(frappe.estadistica_app_page.body, this)).appendTo(this.page.main)
	}
	//END OF CLASS
});


	// HTML CONTENT
	let body = `
	
	<div class="card">
        <div class="card-content">
          <div class="card-body">
            <div class="media d-flex">
              <div class="media-body text-left">
                <h3 class="success">156</h3>
                <span>New Clients</span>
              </div>
              <div class="align-self-center">
                <i class="icon-user success font-large-2 float-right"></i>
              </div>
            </div>
          </div>
        </div>
    </div>
	
	`;
	// frappe.estadistica_app_page = {}
	frappe.estadistica_app_page = {
		body: body
	}
