import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const { t } = useTranslation();
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Enter Login')}
                autofocus
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Enter Password')}
            />
            <Button className={cls.loginBtn}>
                {t('Login')}
            </Button>
        </div>
    );
};
