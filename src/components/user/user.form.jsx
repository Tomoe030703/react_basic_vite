import { Button, Input } from 'antd';
const UserForm = () => {
    return (
        <div className='user-form' style={{ margin: "20px 0" }}>
            <div style={{display: "flex", flexDirection: "column", gap: "15px"}}>
                <div>
                    <span>Full Name</span>
                    <Input />
                </div>
                <div>
                    <span>Email</span>
                    <Input />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password />
                </div>
                <div>
                    <span>Phone</span>
                    <Input />
                </div>
                <div>
                    <Button type="primary"> create user</Button>
                </div>
            </div>
        </div>
    )
}

export default UserForm;