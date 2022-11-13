"use strict";(self.webpackChunkgoit_react_hw_08_1_phonebook=self.webpackChunkgoit_react_hw_08_1_phonebook||[]).push([[50],{50:function(e,a,r){r.r(a);var n=r(885),i=r(5705),l=r(2797),o=r(6015),s=r(803),t=r(4565),m=r(5815),d=r(9541),u=r(1087),c=r(8584),h=r(2791),x=r(5985),p=r(188),w=r(5048),g=r(184);a.default=function(){var e=(0,c.l4)(),a=(0,n.Z)(e,2),r=a[0],b=a[1],v=b.data,f=b.isSuccess,y=b.isError,Z=(0,w.I0)(),j=(0,i.TA)({initialValues:{name:"",email:"",password:""},validationSchema:l.Ry({name:l.Z_().max(255).required("First name is required"),email:l.Z_().email("Must be a valid email").max(255).required("Email is required"),password:l.Z_().max(255).required("Password is required")}),onSubmit:function(e){var a=e.name,n=e.email,i=e.password;r({name:a,email:n,password:i})}}),_=j.handleSubmit,S=j.touched,B=j.errors,C=j.handleBlur,k=j.handleChange,q=j.values,T=j.isSubmitting,W=j.setSubmitting;return(0,h.useEffect)((function(){(f||y)&&W(!1),f&&(x.Am.success("User created"),Z((0,p.KL)(v))),y&&x.Am.error("Something went wrong. Try again.")}),[v,Z,y,f,W]),(0,g.jsx)(o.Z,{component:"main",sx:{alignItems:"center",display:"flex",flexGrow:1,minHeight:"100%"},children:(0,g.jsx)(s.Z,{maxWidth:"sm",children:(0,g.jsxs)("form",{onSubmit:_,children:[(0,g.jsxs)(o.Z,{sx:{my:3},children:[(0,g.jsx)(t.Z,{color:"textPrimary",variant:"h4",children:"Create a new account"}),(0,g.jsx)(t.Z,{color:"textSecondary",gutterBottom:!0,variant:"body2",children:"Use your email to create a new account"})]}),(0,g.jsx)(m.Z,{error:Boolean(S.name&&B.name),fullWidth:!0,helperText:S.name&&B.name,label:"Name",margin:"normal",name:"name",onBlur:C,onChange:k,value:q.name,variant:"outlined"}),(0,g.jsx)(m.Z,{error:Boolean(S.email&&B.email),fullWidth:!0,helperText:S.email&&B.email,label:"Email Address",margin:"normal",name:"email",onBlur:C,onChange:k,type:"email",value:q.email,variant:"outlined"}),(0,g.jsx)(m.Z,{error:Boolean(S.password&&B.password),fullWidth:!0,helperText:S.password&&B.password,label:"Password",margin:"normal",name:"password",onBlur:C,onChange:k,type:"password",value:q.password,variant:"outlined"}),(0,g.jsx)(o.Z,{sx:{py:2},children:(0,g.jsx)(d.Z,{color:"primary",disabled:T,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Sign Up Now"})}),(0,g.jsxs)(t.Z,{color:"textSecondary",variant:"body2",children:["Have an account? ",(0,g.jsx)(u.rU,{to:"/login",children:"Sign In"})]})]})})})}}}]);
//# sourceMappingURL=50.79e5dd45.chunk.js.map