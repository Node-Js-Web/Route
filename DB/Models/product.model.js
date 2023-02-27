import  {  Schema, model  }  from   'mongoose' ;

    const  productSchema  =   new  Schema ({
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'userModel',
            required: true,
        },
    });

    export   const  productModel  =  model( 'productModel' , productSchema);
