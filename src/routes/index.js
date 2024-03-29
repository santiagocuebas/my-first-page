
import { Router } from 'express';

const router = Router();

router.get('/',(req,res)=>{
	res.render('index', { title: 'My First Node Website' });
});

router.get('/contact',(req,res)=>{
	res.render('contact', { title: 'Contact Page' });
});

router.get('/about',(req,res)=>{
	res.render('about', { title: 'About Page' });
});

export default router;
