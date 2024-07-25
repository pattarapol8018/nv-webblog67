module.exports = {
    index(req, res){
        res.send('ดูข้อมูล user ทุกคน');
    },
    create(req, res){
        res.send("สร้าง user "+ JSON.stringify(req.body.username));
    },
    put(req, res){
        res.send('แก้ไข user คนที่ '+ req.params.userId + ' ข้อมูลที่แก้ไข' + JSON.stringify(req.body));
    },
    remove(req, res){
        res.send('ลบ user คนที่ ' + req.params.userId);
    },
    show(req, res){
        res.send('ดูข้อมูล user ทุกคน');
    }
}
    