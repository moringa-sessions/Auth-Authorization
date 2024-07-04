
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
db = SQLAlchemy()
from sqlalchemy.orm import validates

from datetime import datetime

# Models
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)

    tasks = db.relationship('Task', backref='user', lazy=True)


class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    description = db.Column(db.Text, nullable=True)
    completed = db.Column(db.Boolean, default=False)

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)














# class Student(db.Model, SerializerMixin):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(50), nullable=False)
#     age = db.Column(db.Integer, nullable=True)
#     email= db.Column(db.String(50), nullable=False)

#     courses = db.relationship('Course', backref='student', lazy=True)
#     # serialize_rules = ('-courses.student',)
#     def to_dict(self):
#         return {
#         "id" : self.id,
#         "name" : self.name,
#         "age" : self.age,
#         "email" : self.email,
#         "courses" : [course.to_dict() for course in self.courses]
#         }
    
#     @validates('email')
#     def validate_email(self,key, email):
#         if "@" not in email:
#             raise ValueError("Invalid email")
#         return email
 


# class Course(db.Model, SerializerMixin):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(50), nullable=False)
#     code = db.Column(db.String(50), nullable=False)
#     description = db.Column(db.String(50), nullable=False)

#     student_id = db.Column(db.Integer, db.ForeignKey('student.id'), nullable=False)

#     def to_dict(self):

#         return {
#         "id" : self.id   ,
#         "name" : self.name,
#         "code" : self.code,
#         "description" : self.description,
#         "student_id" : self.student_id
        
#         }



# class Student(db.Model, SerializerMixin):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(50), nullable=False)
#     age = db.Column(db.Integer, nullable=True)
#     email= db.Column(db.String(50), nullable=False)

#     courses = db.relationship('Course', backref='student', lazy=True)
#     # serialize_rules = ('-courses.student',)
#     def to_dict(self):
#         return {
#         "id" : self.id,
#         "name" : self.name,
#         "age" : self.age,
#         "email" : self.email,
#         "courses" : [course.to_dict() for course in self.courses]
#         }
    
#     @validates('email')
#     def validate_email(self,key, email):
#         if "@" not in email:
#             raise ValueError("Invalid email")
#         return email
 


# class Course(db.Model, SerializerMixin):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(50), nullable=False)
#     code = db.Column(db.String(50), nullable=False)
#     description = db.Column(db.String(50), nullable=False)

#     student_id = db.Column(db.Integer, db.ForeignKey('student.id'), nullable=False)

#     def to_dict(self):

#         return {
#         "id" : self.id   ,
#         "name" : self.name,
#         "code" : self.code,
#         "description" : self.description,
#         "student_id" : self.student_id
        
#         }



