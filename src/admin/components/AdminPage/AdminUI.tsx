    import React from 'react';
    import { Container, TextField, Button, Box, Typography, Grid } from '@mui/material';
    import { Link } from 'gatsby'

    interface AdminUIProps {
        handleSave: (name: string, data: string) => void;
        handleLogOut: () => void;
        handleToSite: () => void;
    }

    const AdminUI: React.FC<AdminUIProps> = ({ handleSave, handleLogOut, handleToSite }) => {

            interface FormData {
            email: string;
            telegram: string;
            tokenTelegramBot: string;
            tokenMonobank: string;
            password: { 
                        currentPassword: string; 
                        newPassword: string 
                    };
        }
        
        const [formData, setFormData] = React.useState<FormData>({
            email: "",
            telegram: "",
            tokenTelegramBot: "",
            tokenMonobank: "",
            password: { 
                        currentPassword: "", 
                        newPassword: "" 
                    },
        })

                
        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            if (name === 'currentPassword' || name === 'newPassword') {
                setFormData(prevState => ({
                    ...prevState,
                    password: {
                        ...prevState.password,
                        [name]: value
                    }
                }));
            } else {
                setFormData(prevState => ({
                    ...prevState,
                    [name]: value
                }));
            }
        }

        const handleSaveClick = (e: React.MouseEvent<HTMLButtonElement>, name: string) => {
            console.log(formData[name]);
            console.log(name)
            handleSave(name, formData[name]);
        };

        return (
            <Container>
                <Box textAlign="center">
                    <Typography variant="h4" gutterBottom>
                        Адміністративна панель
                    </Typography>
                </Box>
                <Box mt={2} display="flex" flexDirection="column">
                    
                    <Grid container spacing={2} alignItems="center">
                        {Object.entries(formData).map(([key, value]) => (
                            key !== "password" && (
                                <React.Fragment key={key}>
                                    <Grid item xs={9}>
                                        <TextField
                                            fullWidth
                                            label={key}
                                            name={key}
                                            variant="outlined"
                                            size="standard"
                                            value={value}
                                            onChange={handleInputChange}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        onClick={(e) => handleSaveClick(e, key)} 
                                        sx={{ marginLeft: 0 }} 
                                        size="large"
                                        style={{ width: '100%' }}
                                    >
                                        Зберегти
                                    </Button>
                                    </Grid>
                                </React.Fragment>
                            )
                        ))}

                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                label="Поточний пароль"
                                name="currentPassword"
                                variant="outlined"
                                size="standard"
                                type="password"
                                value={formData.password.currentPassword}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                fullWidth
                                label="Новий пароль"
                                name="newPassword"
                                variant="outlined"
                                size="standard"
                                type="password"
                                value={formData.password.newPassword}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={3} >
                            <Button 
                                variant="contained" 
                                color="primary" 
                                onClick={(e) => handleSaveClick(e, "password")} 
                                sx={{ marginLeft: 0 }} 
                                size="large"
                                style={{ width: '100%' }}
                            >
                                Зберегти
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Box display="flex" width="100%">
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    onClick={handleLogOut} 
                                    size="large"
                                    fullWidth  // Встановлює кнопку на всю доступну ширину Box
                                >
                                    Вийти
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box display="flex" width="100%">
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    
                                    size="large"
                                    fullWidth  // Встановлює кнопку на всю доступну ширину Box
                                >
                                    <Link to='/'>
                                        До сайту
                                    </Link>
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                    
                    
                    
                </Box>
            </Container>
        );
    };

    export default AdminUI;
