# white-house-visitors

Use Logstash with the given pipeline configuration to ingest the white house visitors log given by Propublica

See https://projects.propublica.org/graphics/wh-complex

Usage:
```
ln -s ~/builds/logstash-6.2.2 .
cat logs.csv | ./logstash-6.2.2/bin/logstash -f csv-pipeline.conf
```
