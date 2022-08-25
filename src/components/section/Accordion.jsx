import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "../../styles/components/Accordion.module.scss"

export default function SimpleAccordion() {
    return (
        <div className={styles.back__accordion}>
            <Accordion className={styles.acc}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={styles.wrapp}
                >
                    <Typography className={styles.accordion}>Можно ли менять время доставки\место?
                    </Typography>
                </AccordionSummary>

                <Typography className={styles.panel}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </Typography>

            </Accordion>
            <Accordion className={styles.acc}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={styles.wrapp}
                >
                    <Typography className={styles.accordion}>Можно ли менять время доставки\место?
                    </Typography>
                </AccordionSummary>

                    <Typography className={styles.panel}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                    </Typography>

            </Accordion>
            <Accordion className={styles.acc}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={styles.wrapp}
                >
                    <Typography className={styles.accordion}> Как и в чем приезжает еда?
                    </Typography>
                </AccordionSummary>

                    <Typography className={styles.panel}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                    </Typography>
            </Accordion>
            <Accordion className={styles.acc}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={styles.wrapp}
                >
                    <Typography className={styles.accordion}> Когда Вы готовите?
                    </Typography>
                </AccordionSummary>
                    <Typography className={styles.panel}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                    </Typography>
            </Accordion>
            <Accordion className={styles.acc}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={styles.wrapp}
                >
                    <Typography className={styles.accordion}> Какие продукты Вы используете?
                    </Typography>
                </AccordionSummary>
                    <Typography className={styles.panel}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                    </Typography>
            </Accordion>
            <Accordion className={styles.acc}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={styles.wrapp}
                >
                    <Typography className={styles.accordion}> Я буду есть одно и то же?
                    </Typography>
                </AccordionSummary>
                    <Typography className={styles.panel}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                    </Typography>
            </Accordion>
            <Accordion className={styles.acc}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={styles.wrapp}
                >
                    <Typography className={styles.accordion}> У меня аллергия и непереносимость определенных
                        продуктов</Typography>
                </AccordionSummary>
                    <Typography className={styles.panel}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                    </Typography>
            </Accordion>
            <Accordion className={styles.acc}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={styles.wrapp}
                >
                    <Typography className={styles.accordion}> В какой очередности все есть?
                    </Typography>
                </AccordionSummary>
                    <Typography className={styles.panel}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                    </Typography>
            </Accordion>
            <Accordion className={styles.acc}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={styles.wrapp}
                >
                    <Typography className={styles.accordion}> Можно ли замораживать программу?
                    </Typography>
                </AccordionSummary>
                    <Typography className={styles.panel}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                    </Typography>
            </Accordion>

        </div>
    );
}
