class Report:
    def __init__(self , report):
        self.report = report

    def build(self ,report):
        self.report = report

    def save(self , report):
        self.report = report

    def email(self , report):
        self.report = report

    

class ReportOCP(Report):
    def __init__(self, report):
        super().__init__(report)

    