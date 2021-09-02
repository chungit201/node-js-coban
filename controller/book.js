import Book from '../model/book';
export const list = (req,res)=>{
    Book.find((err,data)=>{
        if(err){
            console.log(err);
        }
        res.json(data);
    })
}
 export const add = (req,res)=>{
    const book = new Book(req.body);
    book.save((err,data)=>{
        if(err){
            res.status(400).json({
                messgase: "Them khong thanh cong"
            })
        }
        res.json(data);
    })
 }
 export const bookById =(req,res,next,id)=>{
     Book.findById(id).exec((err,book)=>{
         if(err||!book){
             res.status(400).json({
                 messgase: "Khong tim thay san pham"
             })

         }
         req.book = book;
         next();

     })
 }
 export const read =(req,res)=>{
     return res.json(req.book);
 }
export const search = async (req, res) => {

    var title = req.query.title;
    console.log(title);
    var arrbook = await Book.find();
    // var matchUsers = [];
    var data = arrbook.filter(function(item){
        return item.title.toLowerCase().indexOf(title.toLowerCase()) !==-1;
        // console.log(item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1); 
    });
    res.json(data)
    // for (var i = 0; i < arrbook.length; i++){
    //     if (arrbook[i].title.toLowerCase().indexOf(q) > -1){
    //         matchUsers.push(arrbook[i]);
    //     }
    // }

    // console.log(matchUsers)
 
}
