from faker import Faker
from models import db, User, Task
from app import app, bcrypt

faker = Faker()

def seed_data():
    with app.app_context():
        db.drop_all()
        db.create_all()

        for _ in range(5):
            user = User(
                name=faker.name(),
                email=faker.email(),
                password= bcrypt.generate_password_hash("newpass").decode("utf-8")
            )
            db.session.add(user)
            db.session.commit()

            for _ in range(5):
                task = Task(
                    title=faker.sentence(),
                    description=faker.text(),
                    completed=faker.boolean(),
                    user_id=user.id
                )
                db.session.add(task)
        
        db.session.commit()


print("Started seeding data...")
seed_data()
print("Finished seeding data...")