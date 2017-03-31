## LoginValidatorComponent

```
<LoginValidatorComponent getVal={this.getVal} label={'Name'} type={'text'} placeholder={'Enter Name'} name={'name'}/>
<LoginValidatorComponent getVal={this.getVal} label={'Password'} type={'password'} placeholder={'Enter Password'} name={'password'} min={6} validation={true}/>
<LoginValidatorComponent getVal={this.getVal} label={'Email'} type={'email'} placeholder={'Enter Email'} name={'email'} validateEmail={true}/>
```
## Usage
```
getVal(func)
```
- gives back you the value

```
label(Str)
```
- to add label else `name` will be used as default

```
type(password/text/email)
```
- input type (only password, text and email supported for now)

```
placeholder(Str)
```
- placeholder for your input field 

```
name(Str)
```
- name attribute for input field

```
min(Number)
```
- minimum characters required 

 ```
 validation(Bool)
 ```
 - validation for password 
 -- check for one uppercase
 -- check for one character
 -- check for lower case

```
validateEmail(Bool)
```
- validation for email